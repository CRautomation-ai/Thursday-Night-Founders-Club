import emailjs from "@emailjs/browser";

export interface ConfirmationEmailParams {
  toEmail: string;
  toName: string;
}

export async function sendConfirmationEmail({
  toEmail,
  toName,
}: ConfirmationEmailParams): Promise<void> {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sendConfirmationEmail.ts:8',message:'Function entry',data:{toEmail,toName,hasServiceId:!!import.meta.env.VITE_EMAILJS_SERVICE_ID,hasTemplateId:!!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,hasPublicKey:!!import.meta.env.VITE_EMAILJS_PUBLIC_KEY},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  try {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sendConfirmationEmail.ts:12',message:'Before emailjs.send',data:{serviceId:import.meta.env.VITE_EMAILJS_SERVICE_ID||'MISSING',templateId:import.meta.env.VITE_EMAILJS_TEMPLATE_ID||'MISSING',publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY?'SET':'MISSING'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        email: toEmail, 
        to_name: toName,
        from_name: "Thursday Night Founders Club",
        event_date: "February 5, 2026",
        event_time: "6:00 PM - 7:30 PM",
        event_venue: "Natural Velocity, Docklands",
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      },
    );
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sendConfirmationEmail.ts:26',message:'emailjs.send success',data:{status:result?.status,text:result?.text},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/37092be0-b4e0-42f6-bc04-cbd75e9b9857',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'sendConfirmationEmail.ts:28',message:'emailjs.send error',data:{errorMessage:error instanceof Error?error.message:'unknown',errorType:error instanceof Error?error.constructor.name:'unknown',errorString:String(error),errorStatus:(error as any)?.status,errorText:(error as any)?.text},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    throw error;
  }
}

