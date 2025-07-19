// https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          responsive_breakpoints: {
            create_derived: true,
          },
          // Store original image dimensions
          image_metadata: true,
          return_delete_token: true,
        },
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER', 'strapi-uploads'),
          // Store original image dimensions
          image_metadata: true,
          return_delete_token: true,
        },
        delete: {},
      },
    },
  },
});
