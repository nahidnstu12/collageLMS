export default function Button({label}) {
    return (
      <div class="col-lg-4 offset-lg-4 col-md-12 text-center">
        <a
          href=""
          class="btn btn-danger btn-block bg-gradient border-0 text-white"
        >
         {label}
        </a>
      </div>
    );
}
