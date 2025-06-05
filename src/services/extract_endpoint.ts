export default function extract_endpoint(endPoint: string) {
  const index = endPoint.indexOf("/games");
  return endPoint.slice(index);
}