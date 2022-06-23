import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { formatDistanceToNow } from 'date-fns'

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { title, body, created_at, updated_at } = todo

  const createdAt = new Date(created_at)
  const updatedAt = new Date(updated_at)

  const creationDifference = formatDistanceToNow(createdAt)
  const updatedDifference = formatDistanceToNow(updatedAt)

  let subheader = ''
  if (updatedDifference === creationDifference) {
    subheader = `Posted ${creationDifference} ago`
  } else {
    subheader = `Posted ${creationDifference} ago, last modified ${updatedDifference} ago`
  }

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Card elevation={10} sx={{ width: '100%' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <CardHeader title={title} subheader={subheader} />
          </AccordionSummary>
          <AccordionDetails>
            <CardContent>
              <Typography color="text.secondary">{body}</Typography>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Box>
  )
}

export default TodoItem
