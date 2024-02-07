// Copyright (c) 2024 Braid Technologies Ltd

export enum EConfigStrings {

   kApiLogCategory = "API",

   kRequestJoinKeyUrl = "https://ambitious-ground-0a343ae03.4.azurestaticapps.net/api/joinkey",
   kRequestAiKeyUrl = "https://ambitious-ground-0a343ae03.4.azurestaticapps.net/api/aikey",   
   kRequestKeyParameterName = "JoinKey",

   kAzureTenantId = "5dcb73bd-782d-4979-9c12-4f14106313b0",
   kAzureProductionFluidHost = "https://eu.fluidrelay.azure.com",
   kAzureLocalFluidHost = "http://localhost:7070",

   kBotName = 'BraidBot',
   kBotRequestSignature = '@BraidBot',
   kOpenAiPersonaPrompt = "You are a customer service agent for a bank, skilled in explaining complex products in simple language. You limit replies to 100 words or less.",

   kErrorConnectingToKeyAPI = "Error connecting to Braid server.",
   kErrorConnectingToAiAPI = "Error connecting to AI server." 
};

// This is ised for local running only, as in browser we cannot access environment variables
// NEVER PUT REAL SECRETS IN HERE
let KStubEnvironmentVariables = {
   JoinKey : "8c8397aa-e002-438a-9783-a471b6bed2df",
   ConversationKey : "abcde"
};

export {KStubEnvironmentVariables};
   