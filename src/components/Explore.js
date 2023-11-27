import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Product = [
  {
    id: 1,
    name: 'Furnitures',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HjYC6K9scOuWX_UBKuCPEFIgwieMty3-bQ&usqp=CAU',
    
  },
  {
    id: 2,
    name: 'Shoes',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sOEmuLvv8aaxs0rw99a0Yrl_eqjSKbiRxg&usqp=CAU",
  },
  {
    id: 3,
    name: 'Jackets',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kpl6uBG-E-gvJ0wspwof31k54ZQ8kdSK2Q&usqp=CAU',
  },
  {
    id: 4,
    name: 'Electronics',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRkURvcORNhEqypDmP-qFBhy9OyEPUqEwiQ&usqp=CAU',
  },
  {
    id: 5,
    name: 'Sports goods',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcFrIj9rHicTWscCVl7BxsmGEAWIYc0oUE0K9ep24l4_Kw6RHMdq9PyIpTUtRmQ6n6ks&usqp=CAU',
  },
  {
    id: 6,
    name: 'Musical instruments',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwcflvCDKHDfIg_D9k9YdUNfhs8ZkerWC9A&usqp=CAU',
  },
  
];

const Explore = () => {
  return (
    <Grid container spacing={4} sx={{mt: 1,mb:2}} >
      {Product.map((Product) => (
        <Grid item xs={8} md={4} key={Product.id}>
          <Card  sx={{ border: '2px solid #000' }}>
            <a>
            <CardMedia sx={{border:'1 px'}}
              component="img"
              alt={Product.name}
              height="200"
              image={Product.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {Product.name}
              </Typography>
            </CardContent></a>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Explore;