const getPreviewPathname = (uid, { locale, document }): string | null => {
  const { slug } = document;

  switch (uid) {
    case 'api::page.page': {
      if (slug === 'homepage') {
        return '/';
      }
      return `/${slug}`;
    }
    case 'api::product.product':
      return `/products/${slug}`;
    case 'api::product-page.product-page':
      return '/products';
    case 'api::article.article':
      return `/blog/${slug}`;
    case 'api::blog-page.blog-page':
      return '/blog';
    default:
      return null;
  }
};

export default ({ env }) => {
  const clientUrl = env('CLIENT_URL');
  const previewSecret = env('PREVIEW_SECRET');

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: false,
    },
  };
};
