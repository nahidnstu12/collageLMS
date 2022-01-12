export default function Button({ label }) {
  return (
    <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
      <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
        {label}
      </button>
    </div>
  );
}
