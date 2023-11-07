import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '@/app/hooks';
import Image1 from '@/assets/image/app2.webp';
import FeatureCover from '@/assets/image/feature-cover.webp';
import FeatureHeader from '@/assets/image/feature-header.webp';

type IFront = {};
const Front: FC<IFront> = () => {
  const featureList = ['Images', 'Header', 'Cover', 'List', 'Code Block'];
  const accessList = [
    {
      image: FeatureCover,
      label: 'Organize Files',
      subLabel:
        'Snote allows you to manage your documents easily. It provides a side panel to show your documents and helps you to search them.',
    },
    {
      image: FeatureCover,
      label: 'Listing',
      subLabel:
        'Show all your document next to the sidebar. You can easily to find them by scrolling or searching.',
    },
    {
      image: FeatureCover,
      label: 'Folder',
      subLabel:
        'Group all documents that have same category in one place. Everytime you need to access them, just click on the folder.',
    },
    {
      image: FeatureCover,
      label: 'Tagging',
      subLabel:
        'Easier to classify your content by tagging it in whatever color you loves.',
    },
    {
      image: FeatureCover,
      label: 'Word Counting',
      subLabel:
        'See how many words, characters, lines you just wrote. Event how long it takes to read the content.',
    },
  ];
  const [featureSelected, setFeatureSelected] = useState(featureList[0]);

  const handleFeatureChange = (featureVal: string) => {
    setFeatureSelected(featureVal);
  };

  const Feature = styled('div')({
    background: 'url(src/assets/image/bg.jpg)',
    backgroundSize: 'cover',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.1,
  });

  const FeatureContainer = styled('div')({
    position: 'relative',
    marginTop: '60px',
    marginBottom: '60px',
    paddingTop: '40px',
    paddingBottom: '60px',
  });

  return (
    <>
      <Typography
        component="h2"
        sx={{ textShadow: '3px 3px #e3e3e3', fontSize: '2rem' }}
        className="text-center !font-bold pt-[60px] pb-3"
      >
        Stunning text editor for
        <span className="text-primary"> student</span>
      </Typography>

      <Typography
        component="h2"
        className="!text-md max-w-[420px] !mx-auto"
        sx={{ marginBottom: '2rem' }}
      >
        A beautiful app that allows you to create, edit, synchonize your techinal
        document. Even custom your own look
      </Typography>

      <Box component="img" className="max-w-[80%] mx-auto" src={Image1}></Box>

      <FeatureContainer>
        <Feature></Feature>
        <Typography
          component="h2"
          sx={{ textShadow: '3px 3px #e3e3e3', fontSize: '2rem', marginBottom: '20px' }}
          className="text-center !font-bold"
        >
          Simple, <span className="text-primary">yet</span> Powerful
        </Typography>

        <Box component="div" className="flex items-center justify-center gap-2 mb-8">
          {featureList.map((item) => (
            <Button
              variant={featureSelected === item ? 'contained' : 'outlined'}
              size="small"
              key={item}
              onClick={() => handleFeatureChange(item)}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Box component="img" className="max-w-[60%] mx-auto" src={FeatureHeader}></Box>
      </FeatureContainer>

      <Box className="mb-[80px]">
        <Typography
          component="h2"
          sx={{ fontSize: '2rem', marginBottom: '20px' }}
          className="text-center !font-bold"
        >
          Accessibility
        </Typography>

        <Grid container spacing={2}>
          {accessList.map((item, index) => (
            <Grid item xs={8} sm={4} key={index}>
              <Card className="h-[100%]">
                <Box
                  component="div"
                  className="mx-auto mb-4 bg-[#f3f3f3] h-[240px]"
                ></Box>
                <Box className="px-3 pb-2">
                  <Typography className="!font-bold">{item.label}</Typography>
                  <Typography
                    sx={{ color: '#6b7280', fontWeight: 400, fontSize: '0.8rem' }}
                  >
                    {item.subLabel}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider></Divider>

      <Box>
        <Typography
          component="h2"
          sx={{ textShadow: '3px 3px #e3e3e3', fontSize: '2rem' }}
          className="text-center !font-bold pt-[40px] pb-3"
        >
          <span className="text-primary">Pricing </span> plans
        </Typography>

        <Typography
          component="h2"
          className="!text-md max-w-[420px] !mx-auto"
          sx={{ marginBottom: '2rem' }}
        >
          Start taking note for free in 15 days, then add a plan to unlock additional
          features
        </Typography>

        <Box className="flex gap-10  justify-center mb-[40px]">
          <Card className="w-[420px] p-6 !text-[black]">
            <Typography component="p" className="!font-bold !text-xl">
              Free Trial
            </Typography>
            <Typography component="p" className="!py-4 !text-gray">
              You can try it in 15-days for free.
            </Typography>
            <Typography component="p" sx={{ marginBottom: '20px' }}>
              <span className="font-bold text-5xl">$0</span> for 15 days
            </Typography>
            <Button variant="contained" sx={{ width: '100%' }}>
              Try now
            </Button>
            <Divider sx={{ marginBottom: '12px', marginTop: '28px' }}></Divider>
            <Typography component="p" sx={{ marginBottom: '8px' }}>
              What's included:
            </Typography>

            <div className="flex items-center text-gray text-[0.9rem] py-[4px]">
              <AiOutlineCheck color="green" className="!mr-1"></AiOutlineCheck>
              15 days usage without any fees
            </div>
            <div className="flex items-center text-gray text-[0.9rem] py-[4px]">
              <AiOutlineCheck color="green" className="!mr-1"></AiOutlineCheck>
              No setup fees
            </div>
            <div className="flex items-center text-gray text-[0.9rem] py-[4px]">
              <AiOutlineCheck color="green" className="!mr-1"></AiOutlineCheck>
              50 MB Storage
            </div>
          </Card>

          <Card className="w-[420px] p-6 !text-[black]">
            <Typography component="p" className="!font-bold !text-xl">
              Pro Plan
            </Typography>
            <Typography component="p" className="!py-4 !text-gray">
              Or you can unlock the limited of free plan right now.
            </Typography>
            <Typography component="p" sx={{ marginBottom: '20px' }}>
              <span className="font-bold text-5xl">$25</span> / year
            </Typography>
            <Button variant="contained" sx={{ width: '100%' }}>
              Buy Pro plan
            </Button>
            <Divider sx={{ marginBottom: '12px', marginTop: '28px' }}></Divider>
            <Typography component="p" sx={{ marginBottom: '8px' }}>
              What's included:
            </Typography>

            <div className="flex items-center text-gray text-[0.9rem] py-[4px]">
              <AiOutlineCheck color="green" className="!mr-1"></AiOutlineCheck>
              Unlock all features
            </div>
            <div className="flex items-center text-gray text-[0.9rem] py-[4px]">
              <AiOutlineCheck color="green" className="!mr-1"></AiOutlineCheck>
              Cloud synchronization
            </div>
            <div className="flex items-center text-gray text-[0.9rem] py-[4px]">
              <AiOutlineCheck color="green" className="!mr-1"></AiOutlineCheck>2 GB
              Storage
            </div>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Front;
