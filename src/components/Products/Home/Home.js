import React from 'react';
import CategoryList from './CategoryList/CategoryList';
import LoaderCircle from '../../LoaderCircle/LoaderCircle';

class Home extends React.Component {
  componentDidMount() {
    const {  categories } = this.props
    if(categories.data.length === 0){
      this.props.fetchCategories();
    }
  }


  render() {
    const { categories } = this.props
    const categoriesExist = !!categories && (categories.data.length > 0)
    return <React.Fragment>
      {categoriesExist ? <CategoryList {...this.props} categories={categories.data} /> : <LoaderCircle />}
      </React.Fragment>
  }
}

export default Home;