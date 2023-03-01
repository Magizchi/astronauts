import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/atoms/button";
import Input from "../components/atoms/inputs";
import Select from "../components/atoms/select";
import { API } from "../constants/API";
import useArrayHook from "../hooks/useArray";

type typeOptions = { value: string; label: string; image: string }
const AstronautBuilder = { name: "", planet: { id: 0, name: "", image: "" }, id: 0 };
type AstroForm = { id: number, name: string; planet: { id: number; name: string; image: string }; };
const App = () => {
  const [options, setOptions] = useState<typeOptions[]>([]);
  const [astronautForm, setAstronautForm] = useState<AstroForm>(AstronautBuilder);
  const { array: astronauts, save, remove, update } = useArrayHook<AstroForm>([]);

  const GetPlanets = async () => {
    const { data } = await axios.get(API.PLANETS);
    const planetesOptions = data.map((item: { id: number; name: string; image: string }) => ({ value: item.id, label: item.name, image: item.image }));
    setOptions(planetesOptions);
  };

  const GetAstronaut = async () => {
    const { data } = await axios.get(API.ASTRONAUTES);
    save(data);
  };

  useEffect(() => {
    GetPlanets();
    GetAstronaut();
  }, []);

  const onSubmit = async () => {
    const body = {
      name: astronautForm.name,
      planet: astronautForm.planet.id,
    };
    const { status } = await axios.post(API.ASTRONAUTES, body);

    if (status) {
      setAstronautForm(AstronautBuilder);
      return GetAstronaut();
    }
  };

  const removeAstronaut = async (astronauts: AstroForm) => {
    const { status } = await axios.delete(API.ASTRONAUTES + "/" + astronauts.id);
    if (status) remove(astronauts.id);
  };

  const updateAstronaut = async (astronauts: AstroForm) => {
    const body = {
      name: astronautForm.name,
      id: astronautForm.id,
      planet: astronautForm.planet.id
    }

    const { status } = await axios.patch(API.ASTRONAUTES + '/' + astronauts.id, body)
    if (status) {
      const find = options.find((item) => +item.value === astronautForm.planet.id)
      const updated = { ...astronautForm, planet: { id: astronautForm.planet.id, name: find?.label ?? "", image: find?.image ?? "" } }
      update(updated)
    }
  }

  return (
    <section className="container mx-auto  h-screen w-screen flex justify-center items-center">
      <div>
        {options.map(option => <img src={option.image} className="w-24" />)}
      </div>
      <form className="flex flex-col justify-center w-96 border-2 h-96 bg-bleu-600 p-5">
        <Input
          title="Astronaut"
          placeholder="Name"
          value={astronautForm.name}
          name="name"
          onChange={({ target }) => setAstronautForm((curr) => ({ ...curr, name: target.value }))}
        />
        <Select
          label="Planete"
          placeholder="Choisir"
          options={options}
          value={astronautForm?.planet?.id}
          onChange={({ target }) =>
            setAstronautForm((curr) => ({ ...curr, planet: { ...curr.planet, id: +target.value } }))
          }
        />
        <Button type="button" className="bg-blue-600 text-white font-bold m-3 p-2" onClick={() => { astronautForm.id ? updateAstronaut(astronautForm) : onSubmit() }}>
          {astronautForm.id ? "Modifier" : "Sauvegarder"}
        </Button>
      </form>
      <ul>
        {astronauts.map((astronaut) => (
          <li key={astronaut.id} className="flex items-center">
            <div className="border m-1 p-1 w-48 flex">
              <div className="flex items-center">
                <img className="w-14 mr-5" src={astronaut.planet.image} />
                <span>{astronaut.name}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <Button onClick={() => removeAstronaut(astronaut)} className="bg-red-400 p-1">
                Supprimer
              </Button>
              <Button onClick={() => setAstronautForm(astronaut)} className="bg-green-300 p-1">
                Modifier
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;
