import { Instruction, InstructionType } from './dlx.instructions';

export const inputs_decoder: {[key in InstructionType]: (args: number[]) => string} = {
    R: ([rd, rs1, rs2]) => rs1.toString(2).padStart(5, '0') + rs2.toString(2).padStart(5, '0') + rd.toString(2).padStart(5, '0') + '00000',
    RM: ([rd, rs1]) => inputs_decoder['R']([rd, rs1, 0]),
    I: ([rd, rs1, immediate]) => rs1.toString(2).padStart(5, '0') + rd.toString(2).padStart(5, '0') + immediate.toString(2).padStart(16, '0'),
    IB: ([rs1, name]) => inputs_decoder['I']([0, rs1, name]),
    IJ: ([rs1]) => inputs_decoder['I']([rs1, 0, 0]),
    IL: ([rd, offset, rs1]) => inputs_decoder['I']([rd, rs1, offset]),
    IS: ([offset, rs1, rd]) => inputs_decoder['I']([rd, rs1, offset]),
    J: ([name]) => name.toString(2).padStart(26, '0'),
    LHI: ([rd, immediate]) => inputs_decoder['I']([rd, 0, immediate]),
    NOP: () => '',
    RFE: () => '00000000000000000000000000'
};

//https://www.csd.uoc.gr/~hy425/2002s/dlxmap.html
export const decoder: {[key in Instruction]: [string, string]} = {
    ADD:    ['000000', '100000'],
    ADDI:   ['001000', ''],
    ADDU:   ['000000', '100001'],
    ADDUI:  ['001001', ''],
    AND:    ['000000', '100100'],
    ANDI:   ['100001', ''],
    BEQZ:   ['000100', ''],
    BNEZ:   ['000101', ''],
    J:      ['000010', ''],
    JAL:    ['000011', ''],
    JALR:   ['010011', ''],
    JR:     ['010010', ''],
    LB:     ['100000', ''],
    LBU:    ['100100', ''],
    LH:     ['100001', ''],
    LHI:    ['001111', ''],
    LHU:    ['100101', ''],
    LW:     ['100011', ''],
    MOVI2S: ['000000', '110000'],
    MOVS2I: ['000000', '110001'],
    NOP:    ['00000000000000000000000000000000', ''],
    OR:     ['000000', '100101'],
    ORI:    ['001101', ''],
    RFE:    ['010000', ''],
    SB:     ['101000', ''],
    SEQ:    ['000000', '101000'],
    SEQI:   ['011000', ''],
    SGE:    ['000000', '101101'],
    SGEI:   ['011101', ''],
    SGT:    ['000000', '101011'],
    SGTI:   ['011011', ''],
    SH:     ['101001', ''],
    SLE:    ['000000', '101100'],
    SLEI:   ['011100', ''],
    SLL:    ['000000', '000100'],
    SLLI:   ['010100', ''],
    SLT:    ['000000', '101001'],
    SLTI:   ['011010', ''],
    SNE:    ['000000', '101001'],
    SNEI:   ['011001', ''],
    SRA:    ['000000', '000111'],
    SRAI:   ['010111', ''],
    SRL:    ['000000', '000110'],
    SRLI:   ['010110', ''],
    SUB:    ['000000', '100010'],
    SUBI:   ['001010', ''],
    SUBU:   ['000000', '100011'],
    SUBUI:  ['001011', ''],
    SW:     ['101011', ''],
    TRAP:   ['010001', ''],
    XOR:    ['000000', '100110'],
    XORI:   ['001110', ''] 
}
