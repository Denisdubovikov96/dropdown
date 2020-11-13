import React from "react";
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
const BadgeName = (props) => {
  return (
    <div className="">
      <span>{`${props.first_name} ${props.last_name}`}</span>
    </div>
  );
};
function App() {
  // * Функция которая делает запрос и превращает responce в одноуровневый обьект
  // * Указать уникальный ключ 'uniqKey' в конфиге для каждого обьекта в масиве респонс
  // * Указать масив контролеров отображения sortable - сортировать или нет по данному ключу
  // * controllers "Component" - компонент который рендериться в секции если не указан то значение
  // * "SelectedComponent" - выбраные обекты из дропдауна
  // * Заголовки сообщения плейсхолдеры
  const getDataCounries = async () => {
    const responce = await fetch("http://localhost:5000/");
    const data = await responce.json();
    return data.map(({ metrics, ...rest }) => {
      return { ...rest, ...metrics };
    });
  };

  // email: "dgwalter0@geocities.jp";
  // first_name: "Daniela";
  // gender: "Female";
  // id: 1;
  // ip_address: "35.24.31.60";
  // last_name: "Gwalter";

  const getDataAlternative = async () => {
    const responce = await fetch("http://localhost:5000/alternative/");
    const data = await responce.json();
    return data;
  };

  const config2 = {
    uniqKey: "id",
    // searchKey: "first_name",
    getClearData: getDataAlternative,
    emtptyPlaceholder: "не выбрали человека",
    errorMessage: "Что то пошло не так",
    selectLabel: "Выберите сотрудник",
    dropDownTitle: "Дропдаун сотрудников",
    infoLabel: "Выбраные сотрудники",
    SelectedComponent: BadgeName,
    controllers: [
      {
        title: "Имя",
        key: "first_name",
        sortable: true,
        Component: null,
      },
      {
        title: "Фамилия",
        key: "last_name",
        sortable: true,
        Component: null,
      },
      {
        title: "Пол",
        key: "gender",
        sortable: true,
        Component: null,
      },
    ],
  };

  const config = {
    uniqKey: "country_code",
    searchKey: "country_name",
    getClearData: getDataCounries,
    emtptyPlaceholder: "Ниче не выбрано",
    errorMessage: "Что то пошло не так",
    selectLabel: "Выберите страну",
    dropDownTitle: "Дропдаун стран",
    infoLabel: "Выбрано",
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
      <div style={{ margin: "20px 0", zIndex: 2, position: "relative" }}>
        <DropDown {...config} />
      </div>
      <div
      //  style={{ margin: "100px 0" }}
      >
        <DropDown {...config2} />
      </div>
    </div>
  );
}

export default App;
