import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import FormData from 'form-data'
import FormData from "form-data";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

// Async Thunks for CRUD operations
export const createProduct = createAsyncThunk(
  "createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      console.log(productData);
      const response = await axios.post(
        "https://ecommerce-server-1-2twm.onrender.com/api/products/create",
        productData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "uploadImage",
  async (img, { rejectWithValue }) => {
    try {
      // const data = new FormData();

      // data.append("image", {
      //   uri: image.uri,
      //   name: image.uri.split("/").pop(), //split the uri at / and get the last element of the resulting array which actually is the name with the image extention (e.g, abc.jpg)
      //   type: image.type, // type needs to be modified. keep reading
      // });
      console.log(img);
      const response = await axios.post(
        "https://ecommerce-server-1-2twm.onrender.com/api/v1/prod/upload", // Replace with your actual image upload endpoint
        img,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://ecommerce-server-1-2twm.onrender.com/api/v1/prod/products"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ productId, productData }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `https://ecommerce-server-1-2twm.onrender.com/api/products/${productId}`,
        productData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://ecommerce-server-1-2twm.onrender.com/api/products/${productId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Product Slice
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
      state.error = null;
    });

    builder.addCase(uploadImage.fulfilled, (state, action) => {
      // Handle the image upload response if needed
      state.loading = false;
      state.error = null;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (updatedProductIndex !== -1) {
        state.products[updatedProductIndex] = action.payload;
      }
      state.loading = false;
      state.error = null;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });

    builder.addMatcher(
      (action) =>
        [
          createProduct.pending,
          fetchProducts.pending,
          updateProduct.pending,
          deleteProduct.pending,
        ].includes(action.type),
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );
    builder.addMatcher(
      (action) => [uploadImage.pending].includes(action.type),
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );

    builder.addMatcher(
      (action) => [uploadImage.rejected].includes(action.type),
      (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.error
          : "Something went wrong with image upload";
      }
    );

    builder.addMatcher(
      (action) =>
        [
          createProduct.rejected,
          fetchProducts.rejected,
          updateProduct.rejected,
          deleteProduct.rejected,
        ].includes(action.type),
      (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.error
          : "Something went wrong";
      }
    );
  },
});

export default productSlice.reducer;
