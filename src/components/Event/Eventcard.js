import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function DetailedAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography  variant="h3" className={classes.heading}>Event Name</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Description</Typography>
          </div>
          <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>Details</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          {/* <div className={classes.column}>
            <Chip label="Barbados" onDelete={() => {}} />
          </div> */}
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nihil praesentium quibusdam odio facere reprehenderit rem non at enim animi repudiandae doloremque, totam officiis, alias ea vitae, dolorem natus odit?
              <br />
              {/* <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a> */}
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Registration: 500/-
            </Typography>
            <br />
            <Typography variant="caption">
              Date: 10/212/200
            </Typography>
            <br />

            <Typography variant="caption">
              Contact Number: 9381146658
            </Typography>
            <br />

          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          {/* <Button size="small">Cancel</Button> */}
          <Button size="small" color="primary">
            View
          </Button>
        </AccordionActions>
        
      </Accordion>
    </div>
  );
}