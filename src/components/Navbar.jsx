import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Todo(Ag)-list!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page">Tasks</Link>
        </li>
        <li class="nav-item">
          <Link to='/createTask' class="nav-link">Create Tasks</Link>
        </li>
        <li class="nav-item">
          <Link to="/history" class="nav-link">History</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar