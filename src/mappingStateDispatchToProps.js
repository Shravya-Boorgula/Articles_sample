export const mapStateToProps = (state) => ({
    postsData: state.postsData,
    showModalToEdit: state.showModalToEdit
  });
  
export const mapDispatchToProps = (dispatch) => {
    return {
        showEditModal: () => dispatch({ type: "SHOW_MODAL"}),
        hideEditModal: () => dispatch({ type: "HIDE_MODAL"}),
        getPostsData: () => {
          let dataUrl = "https://jsonplaceholder.typicode.com/comments";
          fetch(dataUrl)
          .then(response => response.json())
          .then(responseData => {
              dispatch({
                type: "GET_POSTS",
                payload: responseData
              })
          })
        }
    }
  };