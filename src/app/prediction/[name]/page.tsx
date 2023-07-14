const getAge = async(name:string) => {
    const res = await fetch(`https://api.agify.io?name=${name}`)
    return res.json()
}
const getGender = async(name:string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`)
    return res.json()
}
const getCountry =async(name:string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`)
    return res.json()
}

interface Params {
    params:{name:string}
}

const page = async ({params}:Params) => {
  const ageData= getAge(params.name)
  const genderData= getGender(params.name)
  const countryData= getCountry(params.name)
 const [age,gender,country] = await Promise.all([ageData,genderData,countryData])
    return (

    
    <div className="text-white flex flex-col items-center justify-center mt-20  ">
        

        <h1 className="tracking-wide  ">Personal Info : {params.name.toUpperCase()} </h1>  <br/>
        <h2 className="tracking-wide  ">Age : {age?.age}</h2> <br />
        <h2 className="tracking-wide  ">Gender : {gender?.gender}</h2><br />
        <h2 className="tracking-wide  ">Count : {gender?.count}</h2><br />
        <h2 className="tracking-wide  ">Country : {country?.country[0]?.country_id}</h2><br />
        </div>
    
  )
}

export default page