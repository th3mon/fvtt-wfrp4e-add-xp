export type Ambitions = {
  shortTerm: string;
  longTerm: string;
};

const getPersonalAmbitions = (actor: Actor): Ambitions => {
  return {
    shortTerm:
      actor.details['personal-ambitions'] &&
      actor.details['personal-ambitions']['short-term'],
    longTerm:
      actor.details['personal-ambitions'] &&
      actor.details['personal-ambitions']['long-term'],
  };
};

const getPartyAmbitions = (actor: Actor): Ambitions => {
  return {
    shortTerm:
      actor.details['party-ambitions'] &&
      actor.details['party-ambitions']['short-term'],
    longTerm:
      actor.details['party-ambitions'] &&
      actor.details['party-ambitions']['long-term'],
  };
};

export const getAmbitions = (actor: Actor): Ambitions[] => {
  return [getPersonalAmbitions(actor), getPartyAmbitions(actor)];
};
