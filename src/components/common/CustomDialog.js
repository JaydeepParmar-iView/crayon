import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import locale from "../../i18n/locale";
import Paper from "@mui/material/Paper";

const StyledDialog = styled(Dialog)(
  ({ theme, isApplyJob, isTalentMyJobsDialog }) => ({
    "& .MuiDialog-container": {
      height: (isApplyJob && "auto") || (isTalentMyJobsDialog && "804px"),
    },
    "& .MuiPaper-root": {
      background: theme.palette.menuBackground,
      height: "92%",
      padding: isTalentMyJobsDialog && "16px",
      // width: '85%'
    },
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
    ".dialogContainer": {
      minHeight: "90%",
      maxHeight: "90%",
    },
  })
);

function StyledDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        display: "flex",
        justifyContent: "center",
        fontWeight: 700,
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

StyledDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function StyledDialogAction(props) {
  const { children, ...other } = props;

  return (
    <DialogActions sx={{ justifyContent: "center" }} {...other}>
      {children}
    </DialogActions>
  );
}

export default function CustomDialog(props) {
  const i18n = locale.en;
  const {
    title,
    onDialogClose,
    show,
    children,
    dialogWidth = "xl",
    showFooter = true,
    footer,
    hideButton = true,
    isApplyJob,
    isTalentMyJobsDialog,
  } = props;
  return (
    <StyledDialog
      isApplyJob={isApplyJob}
      isTalentMyJobsDialog={isTalentMyJobsDialog}
      open={show}
      keepMounted
      fullWidth={true}
      maxWidth={dialogWidth}
      classes={Paper}
      sx={{
        //             width: "500px",
        //             marginLeft: "auto",
        // marginRight: "auto",
        height: title === "Login" ? "420px" : "600px",
      }}
    >
      <StyledDialogTitle id="customized-dialog-title" onClose={onDialogClose}>
        {/* {title} */}
      </StyledDialogTitle>
      <DialogContent>{children}</DialogContent>
      {hideButton && (
        <StyledDialogAction>
          {showFooter && footer ? (
            footer
          ) : (
            <Button
              disableElevation
              variant="contained"
              color="redButton"
              onClick={onDialogClose}
              sx={{
                width: "15%",
              }}
            >
              {i18n["dialog.close"]}
            </Button>
          )}
        </StyledDialogAction>
      )}
    </StyledDialog>
  );
}

CustomDialog.propTypes = {
  onDialogClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
