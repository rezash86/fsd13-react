export default function VotingButton({ lbl, calcVote }) {
  return <button onClick={calcVote}>{lbl}</button>;
}
