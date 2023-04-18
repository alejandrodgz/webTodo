
const Container = ({children, title}) => {
  return (
    <div className="container-fluid">
      <div className="container2 mx-auto">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default Container;
