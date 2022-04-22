import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      invitados: [
        {
          nombre: 'Juan',
          apellido: 'Perez'
        }
      ]
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      invitados: this.state.invitados.concat({
        nombre: this.state.firstName,
        apellido: this.state.lastName
      })
    });
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleChange} name="firstName" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleChange} name="lastName" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.invitados.map((invitado, index) => {
                      return (
                        <tr key={index}>
                          <td>{invitado.nombre}</td>
                          <td>{invitado.apellido}</td>
                        </tr>
                      )
                    }
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


