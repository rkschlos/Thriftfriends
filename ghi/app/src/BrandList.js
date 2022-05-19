function BrandList(props) {
    return (
        <table className="table table-warning table-hover">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {props.brands.map(brand => {
              return (
                <tr key={brand.href}>
                  <td>{ brand.name }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    
  
  export default BrandList;