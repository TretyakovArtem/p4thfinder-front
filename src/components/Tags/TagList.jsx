import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';

class TagList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };

        this.handleAction = this.handleAction.bind(this);
    }

    componentDidMount() {
        axios.get(apiUrl + '/tags')
          .then(response => {
            const tags = response.data;    
            this.setState({ tags });
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleAction(event) {
      event.preventDefault();
      console.log(event.target.id);
      this.props.onAction(event.target.id);
    }
    

    render() {
        console.log(this.state);
        
        return (
            <div class="column">
             <div class="card">
            <header className="card-header">
              <p className="card-header-title">
                Категории
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                {this.state.tags.map(tag =>
                    <input className="button is-text tags" type="button" value={tag.title} id={tag.id} onClick={this.handleAction} />
                )}
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default TagList;