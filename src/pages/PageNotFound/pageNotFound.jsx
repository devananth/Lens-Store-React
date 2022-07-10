import { useDocumentTitle } from "../../custom-hooks";

const PageNotFound = () => {
  useDocumentTitle("Page Not Found | Lens Store");
  return (
    <>
      <section className="d-flex xy-center">
        <h1>Page Not Found : 404 Error</h1>
      </section>
    </>
  );
};

export { PageNotFound };
