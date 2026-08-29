const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const assetVersion = import.meta.env.PUBLIC_ASSET_VERSION?.trim() || 'dev';

export function publicAsset(path: string): string {
  const normalizedPath = path.replace(/^\/+/, '');
  return `${baseUrl}${normalizedPath}?v=${encodeURIComponent(assetVersion)}`;
}
