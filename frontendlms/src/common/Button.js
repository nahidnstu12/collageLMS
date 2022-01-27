export default function Button({ label }) {
  return (
    <div className="col-lg-4 offset-lg-1 col-md-12 text-center">
      <button
        className="btn btn-danger bg-gradient border-0 text-white"
        style={{ width: "130px", marginLeft:"2rem" }}
      >
        {label}
      </button>
    </div>
  );
}
