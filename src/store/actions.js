const actions = {
	countAction: ({state, commit, dispatch}, value) => {
		 commit('setCount', value)
	}
}

export default actions