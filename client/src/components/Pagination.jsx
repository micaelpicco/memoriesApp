import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";

const Paginate = ({ page }) => {
  const classes = useStyles();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <NavLink to={`/posts?page=${2}`}>
          <PaginationItem {...item} />
        </NavLink>
      )}
    />
  );
};

export default Paginate;
