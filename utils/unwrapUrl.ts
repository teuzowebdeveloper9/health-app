export function unwrapOptionalString(wrappedUrl : string) {
  if (!wrappedUrl) return null;

  if (wrappedUrl.startsWith("Optional[") && wrappedUrl.endsWith("]")) {
    return wrappedUrl.slice(9, -1);
  }

  return wrappedUrl;
}
