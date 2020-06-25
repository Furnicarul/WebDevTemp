[...]
state = {
	recipes: []
}

getRecipe = async (e) => {
	const recipeName = e.target.elements.recipeName.value;
	e.preventDefault();
	const api_call = await fetch(`...`);
	const data = await api_call.json();
	this.setState({ recipes: data.recipes });
	console.log(this.state.recipes);
}

render() {
	return(
		<div>
			{ this.state.recipes.map((recipe) => {
				<p>{ recipe.title }</p>
			}) }
		</div>
	);
}
