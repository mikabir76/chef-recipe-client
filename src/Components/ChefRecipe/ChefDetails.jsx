import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    const {chef_name, chef_picture, ingredients, likes, method, ratting, bio, years_of_experience, special_recipes}  = chefDetails;
    console.log(chefDetails)
    return (
        <div className='lg:max-w-screen-2xl mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-16'>-Chef personal Information-</h1>
            <div className='grid grid-cols-2 mb-16'>
                <div className="avatar ms-48">
                    <div className="w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img   src={chef_picture} />
                        
                        
                    </div>
                  
                    
                </div>
                <div className='-ms-28'>
                    <h1 className='text-3xl font-bold mb-3'>{chef_name}</h1>
                    <p className='text-xl text-justify mb-3'><span className='underline font-bold'>Personal Bio: </span>{bio}</p>
                    <p className='text-xl mb-2'><span className='text-orange-400 font-bold'>{years_of_experience}</span> year of experience</p>
                    <p className='text-xl mb-2'><span className='text-orange-400 font-bold'>{likes} </span>Likes</p>
                    <p className='text-xl mb-2'><span className='text-orange-400 font-bold'>{special_recipes.length}</span> Special Recipes</p>
                </div>
            </div>
            {/* Card Group */}
            <div>
            <div className="overflow-x-auto mb-12 border shadow-md ">
  <table className="table w-full mx-auto ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='text-xl'>Recipes Name</th>
        <th className='text-xl'>Ingrediants</th>
        <th className='text-xl'>Method</th>
        <th className='text-xl text-end'>Click your Favourite</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{special_recipes[0]}</td>
        <td>{ingredients[0]}</td>
        <td>1. Preheat oven to 375°F. 2. Coat chicken breasts in breadcrumbs and Parmesan cheese. <br /> 3. Brown chicken in a skillet. 4. Pour marinara sauce over chicken. 5. Top with mozzarella cheese. <br /> 6. Bake for 25 minutes or until chicken is cooked through</td>
        <td className='text-end'><button className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Favaourite</button></td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>{special_recipes[1]}</td>
        <td>{ingredients[1]}</td>
        <td>1.Spread mixture over ice cream. 2. Line a baking sheet with parchment paper. <br /> 3. Spread ice cream onto parchment paper. <br /> 4. Freeze for 1 hour. <br /> 5. Beat egg whites and cream of tartar until stiff peaks form. </td>
        <td className='text-end'><button className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Favaourite</button></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>{special_recipes[2]}</td>
        <td>{ingredients[2]}</td>
        <td>1. Preheat oven to 450°F. 2. Line a baking sheet with parchment paper. <br /> 3. Spread ice cream onto parchment paper. 4. Freeze for 1 hour. <br /> 5. Beat egg whites and cream of tartar until stiff peaks form. </td>
        <td className='text-end'><button className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Favaourite</button></td>
      </tr>
      <tr className="hover">
        <th>4</th>
        <td>{special_recipes[3]}</td>
        <td>{ingredients[3]}</td>
        <td>1. Preheat oven to 375°F. 2. Coat chicken breasts in breadcrumbs and Parmesan cheese. <br /> 3. Brown chicken in a skillet. 4. Pour marinara sauce over chicken. <br /> 5. Top with mozzarella cheese. </td>
        <td className='text-end'><button className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Favaourite</button></td>
      </tr>
      <tr>
        <th>5</th>
        <td>{special_recipes[4]}</td>
        <td>{ingredients[4]}</td>
        <td>1. Preheat oven to 375°F. 2. Coat chicken breasts in breadcrumbs and Parmesan cheese. <br /> 3. Brown chicken in a skillet. 4. Pour marinara sauce over chicken. <br /> 5. Top with mozzarella cheese.</td>
        <td className='text-end'><button className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Favaourite</button></td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ChefDetails;