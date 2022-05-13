import Love from "../components/Love";
import Button from "../components/Button";

const Home = () => {
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <h1>Home</h1>
                </div>
                
                <div className="row">
                    <div className="col">
                        <Button start={10}/>
                        <Button start={0}/>
                        <Button start={30}/>
                        <Love name="coding"/>
                        <Love name="Symfony"/>
                        <Love name="Php"/>
                        <Love name="React"/>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rerum est laboriosam, neque doloremque delectus dolorum quis itaque a soluta deserunt fugiat corrupti iure, laudantium totam animi maxime facilis debitis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;