let student = {
    id: 1,
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    name: "Dog"
}

const Student = () => {
    return (
        <div>
            <img src={student.img} alt="studentImage" width="500px"/>
            <h2>{student.name}</h2>
        </div>
    );

};

export default Student;