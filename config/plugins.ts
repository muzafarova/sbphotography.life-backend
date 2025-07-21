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
          resource_type: 'image',
          image_metadata: true,
        },
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER', 'strapi-uploads'),
        },
        delete: {},
      },
    },
  },
});
