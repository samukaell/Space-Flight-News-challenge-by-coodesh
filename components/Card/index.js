const IMAGENOTFOUND =
  "https://amazonia.mapbiomas.org/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";
import {
  ContainerCard,
  ContainerInfo,
  BoxDescription,
  Title,
  Description,
  Date,
  BoxBuuton,
} from "./styed";

export default function Card(props) {
  const { image, title, date, description, more } = props;
  let imageCard = image;
  function openMore() {
    console.log("click");
    window.open(more, "_blank");
  }

  function organizeDate() {
    let year = '';
    let month = '';
    let day = '';
    if(date === null || date === undefined){
      return 'dd/mm/aaaa'
    }
    for (let i = 0; i < date.length; i++) {
      if (i < 4) {
        year = year + date[i];
      }
      if (i > 4 && i < 7) {
        month = month + date[i];
      }
      if (i > 7 && i < 10) {
        day = day + date[i];
      }
    }

    return `${day}/${month}/${year}`
  }

  if (image === null || image === undefined) {
    imageCard = IMAGENOTFOUND;
  }
  return (
    <ContainerCard>
      <ContainerInfo>
        <img className="image" src={imageCard} />
        <BoxDescription>
          <Title>{title}</Title>
          <Date>{organizeDate()}</Date>
          <Description>{description}</Description>
        </BoxDescription>
      </ContainerInfo>
      <BoxBuuton>
        <button onClick={openMore}>Ir para site</button>
      </BoxBuuton>
    </ContainerCard>
  );
}
