import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { ADD_TITLE } from './reducers/titleReducer';
import { ADD_DESCRIPTION } from './reducers/descriptionReducer';
import './App.css';

function App({addTitle, addDescription, title, description}) {

  const changeTitle = (e) => {
    const value = e.target.value;
    addTitle(value);
  }

  const changeDescription = (e) => {
    const value = e.target.value;
    addDescription(value)
  }

  return (
    <Fragment>
      <form>
        <label>
          Title:
            <input type="text" name="title" value={title} onChange={changeTitle} />
        </label>
        <label>
          Description:
            <textarea type="text" cols="50" rows="3" name="description" value={description} onChange={changeDescription} />
        </label>
      </form>
      <h1>Title:<br/>{title}</h1><br/>
      <p><strong>Description: </strong><br/>{description}</p>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  addTitle: (title) => dispatch({ type: ADD_TITLE, payload: title }),
  addDescription: (description) => dispatch({ type: ADD_DESCRIPTION, payload: description })
})
const mapStateToProps = ({titleReducer, descriptionReducer}) => {
  return {
    title: titleReducer.title,
    description: descriptionReducer.description
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
