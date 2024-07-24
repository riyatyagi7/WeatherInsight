import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL="https://media.istockphoto.com/id/936342386/photo/yellow-umbrella-with-bright-sun-and-blue-sky.jpg?s=1024x1024&w=is&k=20&c=x2eHrUfE_KsGE8Y6yzIG13fCw5tQ_7Ig-ewjt8uO8FQ=";
    const COLD_URL="https://media.istockphoto.com/id/638677200/photo/man-in-parka-hat-and-scarf-frozen-from-the-cold.jpg?s=612x612&w=0&k=20&c=6WRbdup-T8tNIhid90g77Oq-nchMrMkMxfte2yorzxc=";
    const RAIN_URL="https://media.istockphoto.com/id/1066533618/photo/adorable-little-boy-playing-at-rainy-day.jpg?s=2048x2048&w=is&k=20&c=1cgtfGdQYeZE0TAZI8h_EWPF8qTljevKMtSuaFPweGM=";

      return(
        <div className="InfoBox">
       
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80? RAIN_URL: info.temp>15? HOT_URL: COLD_URL}
                title="green iguana"
            />
            <CardContent>
             <Typography gutterBottom variant="h5" component="div">
                 {info.city}{
                    info.humidity>80
                    ? <ThunderstormIcon/>
                    : info.temp>15
                    ? <WbSunnyIcon/>: <AcUnitIcon/>
                 }
             </Typography>
             <Typography variant="body2" color="text.secondary" component={"span"}>
             <p>Temperature={info.temp}&deg;C</p>
             <p>  Humidity={info.humidity}</p>
             <p>Min Temp={info.tempMin}&deg;C</p>
             <p>Max Temp={info.tempMax}&deg;C</p>
             <p>The weather can be described  <i>{info.weather} </i>  and feels like {info.feelsLike}&deg;C</p>
             </Typography>
            </CardContent>
       
        </Card>
        </div>
        </div>
      );
  } 