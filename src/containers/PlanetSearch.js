import React, { Component } from "react";
import PlanetList from '../components/PlanetList'
import Search from '../components/Search';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../redux/actions'

class PlanetSearch extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      data: [],
      isOpen: false
    }
    this.onLogOut = this.onLogOut.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onPlantClick = this.onPlantClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let { searchInfo } = newProps;
    if (searchInfo.success) {
      this.setState({ data: searchInfo.results });
    } else if (!searchInfo.success && searchInfo.showAlert) {
      this.setState({ showAlert: true, alertText: searchInfo.alertText });
    }
  }

  componentDidMount() {
    this.props.searchPlanet('');
  }

  onPlantClick(info) {
    this.setState({ isOpen: true, plantInfo: info });
  }

  getPlanets(text) {
    this.props.searchPlanet(text);
  }

  filterUpdate(e) {
    this.getPlanets(e);
  }

  onLogOut() {
    this.props.history.push('/')
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <a class="navbar-brand" href="">Star Wars</a>
              <ul className="nav navbar-nav navbar-right">
                <button type="button" className="btn btn-danger navbar-btn" onClick={this.onLogOut}>Log out</button>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Search
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
          <PlanetList
            data={this.state.data}
            filter={this.state.filterText}
            handleClick={this.onPlantClick}
          />
           {
          this.state.isOpen ?
            <div className={"modal " + (this.state.isOpen ? "show" : "hide")} tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Planet Information</h5>
                    <button type="button" class="close" onClick={this.closeModal} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Name - {this.state.plantInfo.name}</p>
                    <p>Rotation Period - {this.state.plantInfo.rotation_period}</p>
                    <p>Orbital Period - {this.state.plantInfo.orbital_period}</p>
                    <p>Diameter - {this.state.plantInfo.diameter}</p>
                    <p>Climate - {this.state.plantInfo.climate}</p>
                    <p>Gravity - {this.state.plantInfo.gravity}</p>
                    <p>Terrain - {this.state.plantInfo.terrain}</p>
                    <p>Population - {this.state.plantInfo.population}</p>
                  </div>
                </div>
              </div>
            </div>
          : null
        }
        </main>
      </div>
    )
  }
}

let mapStateToProps = function (state) {
  return { searchInfo: state.search };
}

export default connect(mapStateToProps, action)(withRouter(PlanetSearch));