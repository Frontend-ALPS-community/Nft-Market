'use client';
import { childProps } from '@/types/type';
import { AnimatePresence, motion } from 'framer-motion';

interface IModalLayout extends childProps {
  isOpen: boolean | undefined;
}

const ModalLayout: React.FC<IModalLayout> = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.7)] centered-flex z-50`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white  rounded-xl shadow-xl">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalLayout;
