import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setEditing, updateFeature } from '../actions/featureActions';

const AddedFeature = props => {
  console.log(props);
  const [newFeatureText, setNewFeatureText] = useState();

  const handleChanges = e => {
    setNewFeatureText(e.target.value);
  };


  return (
    <div>
      {!props.editing ? (
        <h1>
        {props.feature.name} <i onClick={props.setEditing} />
        </h1>
      ) : (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onCLick={() => props.updateFeature(newFeatureText)}> Update Feature </button>
    </li>
      )}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    title: state.feature,
    editing: state.editing
  };
};


export default connect(
  mapStateToProps, 
  { setEditing, updateFeature }
)(AddedFeature);
