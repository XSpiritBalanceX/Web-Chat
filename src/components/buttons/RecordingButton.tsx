import { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import MicrophoneIcon from "@components/icons/MicrophoneIcon";
import StopIcon from "@mui/icons-material/Stop";

interface IRecordingButtonProps {
  cbHandleAddVoiceMessage: (chunks: Blob) => void;
}

const RecordingButton = ({
  cbHandleAddVoiceMessage,
}: IRecordingButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingComplete, setIsRecordingComplete] = useState(false);

  const mediaRecorderRef = useRef<null | MediaRecorder>(null);
  const audioChunks = useRef<Blob[]>([]);
  const streamRef = useRef<null | MediaStream>(null);

  useEffect(() => {
    if (isRecordingComplete && audioChunks.current.length > 0) {
      cbHandleAddVoiceMessage(
        audioChunks.current[audioChunks.current.length - 1]
      );
      setIsRecordingComplete(false);
      streamRef.current &&
        streamRef.current.getTracks().forEach((track) => track.stop());
    }
    // eslint-disable-next-line
  }, [isRecordingComplete]);

  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        streamRef.current = stream;
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.addEventListener("dataavailable", (e) => {
          audioChunks.current.push(e.data);
        });
        mediaRecorderRef.current.addEventListener("stop", () => {
          setIsRecordingComplete(true);
        });
        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((err) => console.error("Error accessing microphone:", err));
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <>
      {!isRecording && (
        <Button type="button" onClick={handleStartRecording}>
          <MicrophoneIcon fill="#007AFF" />
        </Button>
      )}
      {isRecording && (
        <Button
          type="button"
          className="stopRecordingButton"
          onClick={handleStopRecording}
        >
          <StopIcon />
        </Button>
      )}
    </>
  );
};

export default RecordingButton;
