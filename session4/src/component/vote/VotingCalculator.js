import { useState } from "react";
import VotingButton from "./VotingButton";

export default function VotingCalculator() {
  const [total, setTotal] = useState(0);

  const handler = () => setTotal((pre) => pre + 1);

  return (
    <div>
      <h2>total values of vote : {total}</h2>
      <VotingButton lbl="vote 1" calcVote={handler} />
      <VotingButton lbl="vote 2" calcVote={handler} />
    </div>
  );
}
