import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material';

function Post() {
    const posts = [
        { id: 1, image: '/1.jpg', title: 'PIZZA', subheader: 'January 1, 2024' },
        { id: 2, image: '/4.jpg', title: 'CHICKEN FETTUCCINE ALFREDO', subheader: 'February 2, 2024' },
        { id: 3, image: '/3.jpg', title: 'GARLIC CHEESE BREAD', subheader: 'March 3, 2024' },
        { id: 4, image: '/2.jpg', title: 'DELICIOUS LASAGNA', subheader: 'March 3, 2024' },
    ];

    return (
        <>
            {posts.map((post) => (
                <Card key={post.id} sx={{ marginBottom: 5 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                {post.title[0]}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title={post.title}
                        subheader={post.subheader}
                    />
                    <CardMedia
                        component="img"
                        sx={{ height: '360px', objectFit: 'cover' }} 
                        image={post.image}
                        alt={post.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is the content of {post.title}. It can be customized based on the post data.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}

            <h3 style={{textAlign:'center'}}> <a style={{color:'inherit',textDecoration:'none'}} href="https://www.linkedin.com/in/fateme-abdolmaleki/">Coded By Fateme Abdolmaleki</a></h3>
           
        </>
    );
}

export default Post;
