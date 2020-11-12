import DropDown from "./components/DropDown";
import { Flag } from "./components/UI";

const SectionFlag = ({ country_code, country_name }) => {
  return (
    <span className="item">
      <Flag countryCode={country_code} svg />
      {country_name}
    </span>
  );
};
const SelectedComponent = ({ country_code, country_name }) => {
  return (
    <div className="country-badge">
      <Flag countryCode={country_code} />
      <span>{country_name}</span>
    </div>
  );
};
function App() {
  // TODO Функция которая делает запрос и превращает responce в одноуровневый обьект
  // * Указать уникальный ключ 'uniqKey' в конфиге для каждого обьекта в масиве респонс
  // * Указать масив контролеров отображения sortable - сортировать или нет по данному ключу
  // * controllers "Component" - компонент который рендериться в секции если не указан то значение
  // * "SelectedComponent" - выбраные обекты из дропдауна
  // TODO Заголовки сообщения плейсхолдеры

  const config = {
    uniqKey: "country_code",
    getClearData: "function",
    // emtptyPlaceholder: "Ниче не выбрано", // не обезательный параметр
    // errorMessage: "Что то пошло не так",
    // selectLabel: "Выберите страну",
    // dropDownTitle: "Дропдаун стран",
    // infoLabel: "Выбрано",
    SelectedComponent: SelectedComponent,
    controllers: [
      {
        title: "Countries",
        key: "country_name",
        sortable: false,
        Component: SectionFlag,
      },
      {
        title: "Metric 1",
        key: "metric_1",
        sortable: true,
        Component: null,
      },
      {
        title: "Metric 2",
        key: "metric_2",
        sortable: true,
        Component: null,
      },
      {
        title: "Metric 3",
        key: "metric_3",
        sortable: true,
        Component: null,
      },
      {
        title: "Metric 4",
        key: "metric_4",
        sortable: true,
        Component: null,
      },
    ],
  };
  return (
    <div style={{ margin: "20px auto" }}>
      <DropDown {...config} />
    </div>
  );
}

export default App;
