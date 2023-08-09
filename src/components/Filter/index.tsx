import { useContext } from "react";
import InfoListCards from "../../database/Mock";
import { FilterContainer, ModelContainer, YearContainer } from "./styles";
import { FilterContext } from "../../contexts/FilterContext/filterContext";

export const FilterComponent = () => {
  const { setFilter } = useContext(FilterContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    /* Tentei usar event.currentTarget mas não funcionou; 
    o código sempre quebrava no segundo clique sobre o target, porque o innerText retornava sempre null */
    const key = target.getAttribute("data-key");
    const value = target.innerText;
    if (key) {
      setFilter((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
    console.log();
  };

  return (
    <FilterContainer>
      <h1>Filtros</h1>
      <ModelContainer>
        <p>
          <strong> Marcas </strong>
        </p>
        {InfoListCards.map((item) => (
          <li data-key="name" onClick={handleClick}>
            {item.name}
          </li>
        ))}
      </ModelContainer>
      <YearContainer>
        <p>
          <strong>Ano</strong>
        </p>
        {InfoListCards.sort((a, b) => Number(a.year) - Number(b.year)).map(
          (item) => (
            <li data-key="year" onClick={handleClick}>
              {item.year}
            </li>
          )
        )}
      </YearContainer>
    </FilterContainer>
  );
};
