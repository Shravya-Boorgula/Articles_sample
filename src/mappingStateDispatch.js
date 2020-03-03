export const mapStateToProps = (state) => ({
    showModalToEdit: state.showModalToEdit 
  });
  
export const mapDispatchToProps = (dispatch) => {
    return {
        showEditModal: () => dispatch({ type: "SHOW_MODAL"}),
        hideEditModal: () => dispatch({ type: "HIDE_MODAL"})
    }
  };