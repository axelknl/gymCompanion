import Navigation from "../components/Navigation";
import Goal from "../components/home/Goal";

const Home = () => {
    return (
        <div className="home w-100 min-vh-100 row">
            <Navigation />
            <div className="content w-100 bg-light col px-4 py-3">
                <Goal />
            </div>
            <GoalEditor />
        </div>
    )
}

const GoalEditor = () => {
    return (
        <div className="goalEditor">
            <div className="content bg-light rounded px-4 py-3">
                <h6 className="mb-4">Personnalisez votre objectif</h6>
                <form>
                    <div className="form-group mb-3">
                        <label for="goalInputTitle" className="mb-1">Titre</label>
                        <input type="text" className="form-control" id="goalInputTitle" placeholder="Titre"></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="goalInputGoal" className="mb-1">Objectif</label>
                        <input type="number" className="form-control" id="goalInputGoal" placeholder="Votre objectif"></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="goalInputStart" className="mb-1">Titre</label>
                        <input type="number" className="form-control" id="goalInputStart" placeholder="Votre niveau de départ"></input>
                    </div>
                    <div className="form-group mb-3">
                        <label for="goalInputNow" className="mb-1">Titre</label>
                        <input type="number" className="form-control" id="goalInputNow" placeholder="Voter niveau Actuel"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;