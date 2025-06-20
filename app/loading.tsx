export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent border-white" />
    </div>
  );
}
