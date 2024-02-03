import { useState, useRef } from "react";

function Home() {
    const [isValentineNo, setIsValentineNo] = useState(false);
    const [isValentineYes, setIsValentineYes] = useState(false);
    const [valentine, setValentine] = useState(true);
    const [returnHome, setReturnHome] = useState(false);

    const [resto, setresto] = useState(false);

    const restoChoice = useRef("");

    const handleValentineNo = () => {
        setReturnHome(true);
        setValentine(false);
        setIsValentineNo(true);
    };

    const handleValentineYes = () => {
        setReturnHome(true);
        setValentine(false);
        setIsValentineYes(true);
    };

    const handleReturnHome = () => {
        setReturnHome(false);
        setValentine(true);
        setIsValentineNo(false);
        setIsValentineYes(false);
        setresto(false);
    };

    const handleRestoClick = () => {
        setValentine(false);
        setIsValentineNo(false);
        setIsValentineYes(false);
        setresto(true);
    };

    const handleRestoChoice = (e) => {
        restoChoice.current = e.target.value;
        alert("Tu as choisi " + restoChoice.current);
    };

    return (
        <div>
            {returnHome && (
                <div>
                    <div className="pl-4 pt-4">
                        <button
                            onClick={handleReturnHome}
                            className="text-blue-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="inline-block w-4 h-4 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                ></path>
                            </svg>
                            Retour
                        </button>
                    </div>
                </div>
            )}
            {valentine && (
                <div>
                    <div className="flex justify-center items-center pt-10">
                        <img
                            className="rounded-lg"
                            src="assets/img/cat.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center pt-4 text-3xl">
                        <h1>Veux-tu être ma valentine ?</h1>
                    </div>
                    <div className="flex justify-center pt-4">
                        <div className="grid grid-cols-2 max-w-md">
                            <div>
                                <button
                                    onClick={handleValentineYes}
                                    className="bg-green-500 rounded-xl px-6 py-2 text-xl"
                                >
                                    OUI !
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={handleValentineNo}
                                    className="bg-red-500 rounded-xl px-6 py-2 text-xl"
                                >
                                    NON !
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div>
                {isValentineNo && (
                    <div>
                        <div className="flex justify-center pt-4">
                            <img
                                className="w-[400px]"
                                src="assets/img/sad.png"
                                alt="sadcat"
                            />
                        </div>
                        <h2 className="flex justify-center pt-4 text-3xl">
                            Comment ça mon reuf ? 😞
                        </h2>
                        <div className="flex justify-center pt-4">
                            <button
                                onClick={handleReturnHome}
                                className="bg-green-500 px-6 py-2 rounded-xl text-xl"
                            >
                                Non j'rigole &#128517;
                            </button>
                        </div>
                    </div>
                )}
                {isValentineYes && (
                    <div>
                        <div className="flex justify-center pt-4">
                            <img src="assets/img/happycat.gif" alt="happycat" />
                        </div>
                        <h2 className="flex justify-center pt-4 text-3xl">
                            YOUPIIIIIIIIIIIIIIII &#128525; &#128525; &#128525;
                            &#128525;
                        </h2>

                        <div className="flex justify-center pt-4 ">
                            <button
                                id="resto"
                                onClick={handleRestoClick}
                                className="px-6 py-2 bg-green-500 rounded-xl text-xl"
                            >
                                Choisit ton resto
                            </button>
                        </div>
                    </div>
                )}

                {resto && (
                    <div>
                        <div className="flex justify-center pt-4">
                            <img
                                className="w-[400px]"
                                src="assets/img/bigcat.jpg"
                                alt="restaurant"
                            />
                        </div>
                        <h2 className="flex justify-center pt-4 text-3xl">
                            On va où ?
                        </h2>
                        <div className="flex justify-center pt-4">
                            <select
                                onChange={handleRestoChoice}
                                className="px-6 py-2 rounded-xl text-xl border-black"
                            >
                                <option value="Tacos">Tacos</option>
                                <option value="Macdo">Macdo</option>
                                <option value="Blackandwhite">
                                    Black and white
                                </option>
                                <option value="Suhsi">Suhsi</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
