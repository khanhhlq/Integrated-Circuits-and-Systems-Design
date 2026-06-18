/**********************************************************************/
/*   ____  ____                                                       */
/*  /   /\/   /                                                       */
/* /___/  \  /                                                        */
/* \   \   \/                                                       */
/*  \   \        Copyright (c) 2003-2009 Xilinx, Inc.                */
/*  /   /          All Right Reserved.                                 */
/* /---/   /\                                                         */
/* \   \  /  \                                                      */
/*  \___\/\___\                                                    */
/***********************************************************************/

/* This file is designed for use with ISim build 0xfbc00daa */

#define XSI_HIDE_SYMBOL_SPEC true
#include "xsi.h"
#include <memory.h>
#ifdef __GNUC__
#include <stdlib.h>
#else
#include <malloc.h>
#define alloca _alloca
#endif
static const char *ng0 = "/home/ise/D_DRIVE/Integrated-Circuits-and-Systems-Design/sangdan_tp_8bit_2speed/design.v";
static unsigned int ng1[] = {0U, 0U};
static unsigned int ng2[] = {24999999U, 0U};
static unsigned int ng3[] = {49999999U, 0U};
static unsigned int ng4[] = {1U, 0U};
static unsigned int ng5[] = {8U, 0U};
static unsigned int ng6[] = {128U, 0U};
static unsigned int ng7[] = {2U, 0U};
static unsigned int ng8[] = {192U, 0U};
static unsigned int ng9[] = {3U, 0U};
static unsigned int ng10[] = {224U, 0U};
static unsigned int ng11[] = {7U, 0U};
static unsigned int ng12[] = {4U, 0U};
static unsigned int ng13[] = {240U, 0U};
static unsigned int ng14[] = {15U, 0U};
static unsigned int ng15[] = {5U, 0U};
static unsigned int ng16[] = {248U, 0U};
static unsigned int ng17[] = {31U, 0U};
static unsigned int ng18[] = {6U, 0U};
static unsigned int ng19[] = {252U, 0U};
static unsigned int ng20[] = {63U, 0U};
static unsigned int ng21[] = {254U, 0U};
static unsigned int ng22[] = {127U, 0U};
static unsigned int ng23[] = {255U, 0U};



static void Always_37_0(char *t0)
{
    char t13[8];
    char t14[8];
    char t25[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    unsigned int t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    char *t11;
    char *t12;
    char *t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    char *t19;
    unsigned int t20;
    unsigned int t21;
    unsigned int t22;
    unsigned int t23;
    char *t24;
    char *t26;
    char *t27;
    unsigned int t28;
    unsigned int t29;
    unsigned int t30;
    unsigned int t31;
    unsigned int t32;
    unsigned int t33;
    unsigned int t34;
    unsigned int t35;
    unsigned int t36;
    unsigned int t37;
    unsigned int t38;
    unsigned int t39;
    char *t40;
    char *t41;
    unsigned int t42;
    unsigned int t43;
    unsigned int t44;
    unsigned int t45;
    unsigned int t46;
    char *t47;
    char *t48;

LAB0:    t1 = (t0 + 3752U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(37, ng0);
    t2 = (t0 + 4568);
    *((int *)t2) = 1;
    t3 = (t0 + 3784);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(37, ng0);

LAB5:    xsi_set_current_line(38, ng0);
    t4 = (t0 + 1480U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB6;

LAB7:    xsi_set_current_line(41, ng0);
    t2 = (t0 + 1800U);
    t3 = *((char **)t2);
    t2 = (t3 + 4);
    t6 = *((unsigned int *)t2);
    t7 = (~(t6));
    t8 = *((unsigned int *)t3);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB10;

LAB11:    xsi_set_current_line(49, ng0);

LAB36:    xsi_set_current_line(51, ng0);
    t2 = (t0 + 2520);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 2520);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 26, 0LL);
    xsi_set_current_line(52, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2680);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);

LAB12:
LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(38, ng0);

LAB9:    xsi_set_current_line(39, ng0);
    t11 = ((char*)((ng1)));
    t12 = (t0 + 2520);
    xsi_vlogvar_wait_assign_value(t12, t11, 0, 0, 26, 0LL);
    xsi_set_current_line(40, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2680);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB8;

LAB10:    xsi_set_current_line(41, ng0);

LAB13:    xsi_set_current_line(42, ng0);
    t4 = ((char*)((ng1)));
    t5 = (t0 + 2680);
    xsi_vlogvar_wait_assign_value(t5, t4, 0, 0, 1, 0LL);
    xsi_set_current_line(43, ng0);
    t2 = (t0 + 2520);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = (t0 + 1960U);
    t11 = *((char **)t5);
    memset(t14, 0, 8);
    t5 = (t11 + 4);
    t6 = *((unsigned int *)t5);
    t7 = (~(t6));
    t8 = *((unsigned int *)t11);
    t9 = (t8 & t7);
    t10 = (t9 & 1U);
    if (t10 != 0)
        goto LAB14;

LAB15:    if (*((unsigned int *)t5) != 0)
        goto LAB16;

LAB17:    t15 = (t14 + 4);
    t16 = *((unsigned int *)t14);
    t17 = *((unsigned int *)t15);
    t18 = (t16 || t17);
    if (t18 > 0)
        goto LAB18;

LAB19:    t20 = *((unsigned int *)t14);
    t21 = (~(t20));
    t22 = *((unsigned int *)t15);
    t23 = (t21 || t22);
    if (t23 > 0)
        goto LAB20;

LAB21:    if (*((unsigned int *)t15) > 0)
        goto LAB22;

LAB23:    if (*((unsigned int *)t14) > 0)
        goto LAB24;

LAB25:    memcpy(t13, t24, 8);

LAB26:    memset(t25, 0, 8);
    t26 = (t4 + 4);
    t27 = (t13 + 4);
    t28 = *((unsigned int *)t4);
    t29 = *((unsigned int *)t13);
    t30 = (t28 ^ t29);
    t31 = *((unsigned int *)t26);
    t32 = *((unsigned int *)t27);
    t33 = (t31 ^ t32);
    t34 = (t30 | t33);
    t35 = *((unsigned int *)t26);
    t36 = *((unsigned int *)t27);
    t37 = (t35 | t36);
    t38 = (~(t37));
    t39 = (t34 & t38);
    if (t39 != 0)
        goto LAB30;

LAB27:    if (t37 != 0)
        goto LAB29;

LAB28:    *((unsigned int *)t25) = 1;

LAB30:    t41 = (t25 + 4);
    t42 = *((unsigned int *)t41);
    t43 = (~(t42));
    t44 = *((unsigned int *)t25);
    t45 = (t44 & t43);
    t46 = (t45 != 0);
    if (t46 > 0)
        goto LAB31;

LAB32:    xsi_set_current_line(46, ng0);

LAB35:    xsi_set_current_line(47, ng0);
    t2 = (t0 + 2520);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng4)));
    memset(t13, 0, 8);
    xsi_vlog_unsigned_add(t13, 26, t4, 26, t5, 26);
    t11 = (t0 + 2520);
    xsi_vlogvar_wait_assign_value(t11, t13, 0, 0, 26, 0LL);

LAB33:    goto LAB12;

LAB14:    *((unsigned int *)t14) = 1;
    goto LAB17;

LAB16:    t12 = (t14 + 4);
    *((unsigned int *)t14) = 1;
    *((unsigned int *)t12) = 1;
    goto LAB17;

LAB18:    t19 = ((char*)((ng2)));
    goto LAB19;

LAB20:    t24 = ((char*)((ng3)));
    goto LAB21;

LAB22:    xsi_vlog_unsigned_bit_combine(t13, 26, t19, 26, t24, 26);
    goto LAB26;

LAB24:    memcpy(t13, t19, 8);
    goto LAB26;

LAB29:    t40 = (t25 + 4);
    *((unsigned int *)t25) = 1;
    *((unsigned int *)t40) = 1;
    goto LAB30;

LAB31:    xsi_set_current_line(43, ng0);

LAB34:    xsi_set_current_line(44, ng0);
    t47 = ((char*)((ng1)));
    t48 = (t0 + 2520);
    xsi_vlogvar_wait_assign_value(t48, t47, 0, 0, 26, 0LL);
    xsi_set_current_line(45, ng0);
    t2 = ((char*)((ng4)));
    t3 = (t0 + 2680);
    xsi_vlogvar_wait_assign_value(t3, t2, 0, 0, 1, 0LL);
    goto LAB33;

}

static void Always_65_1(char *t0)
{
    char t13[8];
    char t18[8];
    char t26[8];
    char t68[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    unsigned int t6;
    unsigned int t7;
    unsigned int t8;
    unsigned int t9;
    unsigned int t10;
    char *t11;
    char *t12;
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    char *t17;
    char *t19;
    unsigned int t20;
    unsigned int t21;
    unsigned int t22;
    unsigned int t23;
    unsigned int t24;
    char *t25;
    unsigned int t27;
    unsigned int t28;
    unsigned int t29;
    char *t30;
    char *t31;
    char *t32;
    unsigned int t33;
    unsigned int t34;
    unsigned int t35;
    unsigned int t36;
    unsigned int t37;
    unsigned int t38;
    unsigned int t39;
    char *t40;
    char *t41;
    unsigned int t42;
    unsigned int t43;
    unsigned int t44;
    unsigned int t45;
    unsigned int t46;
    unsigned int t47;
    unsigned int t48;
    unsigned int t49;
    int t50;
    int t51;
    unsigned int t52;
    unsigned int t53;
    unsigned int t54;
    unsigned int t55;
    unsigned int t56;
    unsigned int t57;
    char *t58;
    unsigned int t59;
    unsigned int t60;
    unsigned int t61;
    unsigned int t62;
    unsigned int t63;
    char *t64;
    char *t65;
    char *t66;
    char *t67;
    char *t69;
    char *t70;
    unsigned int t71;
    unsigned int t72;
    unsigned int t73;
    unsigned int t74;
    unsigned int t75;
    unsigned int t76;
    unsigned int t77;
    unsigned int t78;
    unsigned int t79;
    unsigned int t80;
    unsigned int t81;
    unsigned int t82;
    char *t83;
    char *t84;
    unsigned int t85;
    unsigned int t86;
    unsigned int t87;
    unsigned int t88;
    unsigned int t89;
    char *t90;
    char *t91;

LAB0:    t1 = (t0 + 4000U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(65, ng0);
    t2 = (t0 + 4584);
    *((int *)t2) = 1;
    t3 = (t0 + 4032);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(65, ng0);

LAB5:    xsi_set_current_line(66, ng0);
    t4 = (t0 + 1480U);
    t5 = *((char **)t4);
    t4 = (t5 + 4);
    t6 = *((unsigned int *)t4);
    t7 = (~(t6));
    t8 = *((unsigned int *)t5);
    t9 = (t8 & t7);
    t10 = (t9 != 0);
    if (t10 > 0)
        goto LAB6;

LAB7:    xsi_set_current_line(68, ng0);
    t2 = (t0 + 1800U);
    t3 = *((char **)t2);
    memset(t13, 0, 8);
    t2 = (t3 + 4);
    t6 = *((unsigned int *)t2);
    t7 = (~(t6));
    t8 = *((unsigned int *)t3);
    t9 = (t8 & t7);
    t10 = (t9 & 1U);
    if (t10 != 0)
        goto LAB10;

LAB11:    if (*((unsigned int *)t2) != 0)
        goto LAB12;

LAB13:    t5 = (t13 + 4);
    t14 = *((unsigned int *)t13);
    t15 = *((unsigned int *)t5);
    t16 = (t14 || t15);
    if (t16 > 0)
        goto LAB14;

LAB15:    memcpy(t26, t13, 8);

LAB16:    t58 = (t26 + 4);
    t59 = *((unsigned int *)t58);
    t60 = (~(t59));
    t61 = *((unsigned int *)t26);
    t62 = (t61 & t60);
    t63 = (t62 != 0);
    if (t63 > 0)
        goto LAB24;

LAB25:
LAB26:
LAB8:    goto LAB2;

LAB6:    xsi_set_current_line(66, ng0);

LAB9:    xsi_set_current_line(67, ng0);
    t11 = ((char*)((ng1)));
    t12 = (t0 + 2840);
    xsi_vlogvar_wait_assign_value(t12, t11, 0, 0, 4, 0LL);
    goto LAB8;

LAB10:    *((unsigned int *)t13) = 1;
    goto LAB13;

LAB12:    t4 = (t13 + 4);
    *((unsigned int *)t13) = 1;
    *((unsigned int *)t4) = 1;
    goto LAB13;

LAB14:    t11 = (t0 + 2680);
    t12 = (t11 + 56U);
    t17 = *((char **)t12);
    memset(t18, 0, 8);
    t19 = (t17 + 4);
    t20 = *((unsigned int *)t19);
    t21 = (~(t20));
    t22 = *((unsigned int *)t17);
    t23 = (t22 & t21);
    t24 = (t23 & 1U);
    if (t24 != 0)
        goto LAB17;

LAB18:    if (*((unsigned int *)t19) != 0)
        goto LAB19;

LAB20:    t27 = *((unsigned int *)t13);
    t28 = *((unsigned int *)t18);
    t29 = (t27 & t28);
    *((unsigned int *)t26) = t29;
    t30 = (t13 + 4);
    t31 = (t18 + 4);
    t32 = (t26 + 4);
    t33 = *((unsigned int *)t30);
    t34 = *((unsigned int *)t31);
    t35 = (t33 | t34);
    *((unsigned int *)t32) = t35;
    t36 = *((unsigned int *)t32);
    t37 = (t36 != 0);
    if (t37 == 1)
        goto LAB21;

LAB22:
LAB23:    goto LAB16;

LAB17:    *((unsigned int *)t18) = 1;
    goto LAB20;

LAB19:    t25 = (t18 + 4);
    *((unsigned int *)t18) = 1;
    *((unsigned int *)t25) = 1;
    goto LAB20;

LAB21:    t38 = *((unsigned int *)t26);
    t39 = *((unsigned int *)t32);
    *((unsigned int *)t26) = (t38 | t39);
    t40 = (t13 + 4);
    t41 = (t18 + 4);
    t42 = *((unsigned int *)t13);
    t43 = (~(t42));
    t44 = *((unsigned int *)t40);
    t45 = (~(t44));
    t46 = *((unsigned int *)t18);
    t47 = (~(t46));
    t48 = *((unsigned int *)t41);
    t49 = (~(t48));
    t50 = (t43 & t45);
    t51 = (t47 & t49);
    t52 = (~(t50));
    t53 = (~(t51));
    t54 = *((unsigned int *)t32);
    *((unsigned int *)t32) = (t54 & t52);
    t55 = *((unsigned int *)t32);
    *((unsigned int *)t32) = (t55 & t53);
    t56 = *((unsigned int *)t26);
    *((unsigned int *)t26) = (t56 & t52);
    t57 = *((unsigned int *)t26);
    *((unsigned int *)t26) = (t57 & t53);
    goto LAB23;

LAB24:    xsi_set_current_line(68, ng0);

LAB27:    xsi_set_current_line(69, ng0);
    t64 = (t0 + 2840);
    t65 = (t64 + 56U);
    t66 = *((char **)t65);
    t67 = ((char*)((ng5)));
    memset(t68, 0, 8);
    t69 = (t66 + 4);
    t70 = (t67 + 4);
    t71 = *((unsigned int *)t66);
    t72 = *((unsigned int *)t67);
    t73 = (t71 ^ t72);
    t74 = *((unsigned int *)t69);
    t75 = *((unsigned int *)t70);
    t76 = (t74 ^ t75);
    t77 = (t73 | t76);
    t78 = *((unsigned int *)t69);
    t79 = *((unsigned int *)t70);
    t80 = (t78 | t79);
    t81 = (~(t80));
    t82 = (t77 & t81);
    if (t82 != 0)
        goto LAB31;

LAB28:    if (t80 != 0)
        goto LAB30;

LAB29:    *((unsigned int *)t68) = 1;

LAB31:    t84 = (t68 + 4);
    t85 = *((unsigned int *)t84);
    t86 = (~(t85));
    t87 = *((unsigned int *)t68);
    t88 = (t87 & t86);
    t89 = (t88 != 0);
    if (t89 > 0)
        goto LAB32;

LAB33:    xsi_set_current_line(72, ng0);
    t2 = (t0 + 2840);
    t3 = (t2 + 56U);
    t4 = *((char **)t3);
    t5 = ((char*)((ng4)));
    memset(t13, 0, 8);
    xsi_vlog_unsigned_add(t13, 4, t4, 4, t5, 4);
    t11 = (t0 + 2840);
    xsi_vlogvar_wait_assign_value(t11, t13, 0, 0, 4, 0LL);

LAB34:    goto LAB26;

LAB30:    t83 = (t68 + 4);
    *((unsigned int *)t68) = 1;
    *((unsigned int *)t83) = 1;
    goto LAB31;

LAB32:    xsi_set_current_line(70, ng0);
    t90 = ((char*)((ng1)));
    t91 = (t0 + 2840);
    xsi_vlogvar_wait_assign_value(t91, t90, 0, 0, 4, 0LL);
    goto LAB34;

}

static void Always_92_2(char *t0)
{
    char t11[8];
    char t12[8];
    char *t1;
    char *t2;
    char *t3;
    char *t4;
    char *t5;
    char *t6;
    char *t7;
    int t8;
    char *t9;
    char *t10;
    unsigned int t13;
    unsigned int t14;
    unsigned int t15;
    unsigned int t16;
    unsigned int t17;
    unsigned int t18;
    unsigned int t19;
    unsigned int t20;
    unsigned int t21;
    unsigned int t22;
    unsigned int t23;
    unsigned int t24;
    char *t25;

LAB0:    t1 = (t0 + 4248U);
    t2 = *((char **)t1);
    if (t2 == 0)
        goto LAB2;

LAB3:    goto *t2;

LAB2:    xsi_set_current_line(92, ng0);
    t2 = (t0 + 4600);
    *((int *)t2) = 1;
    t3 = (t0 + 4280);
    *((char **)t3) = t2;
    *((char **)t1) = &&LAB4;

LAB1:    return;
LAB4:    xsi_set_current_line(92, ng0);

LAB5:    xsi_set_current_line(93, ng0);
    t4 = (t0 + 2840);
    t5 = (t4 + 56U);
    t6 = *((char **)t5);

LAB6:    t7 = ((char*)((ng1)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t7, 4);
    if (t8 == 1)
        goto LAB7;

LAB8:    t2 = ((char*)((ng4)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB9;

LAB10:    t2 = ((char*)((ng7)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB11;

LAB12:    t2 = ((char*)((ng9)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB13;

LAB14:    t2 = ((char*)((ng12)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB15;

LAB16:    t2 = ((char*)((ng15)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB17;

LAB18:    t2 = ((char*)((ng18)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB19;

LAB20:    t2 = ((char*)((ng11)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB21;

LAB22:    t2 = ((char*)((ng5)));
    t8 = xsi_vlog_unsigned_case_compare(t6, 4, t2, 4);
    if (t8 == 1)
        goto LAB23;

LAB24:
LAB26:
LAB25:    xsi_set_current_line(103, ng0);
    t2 = ((char*)((ng1)));
    t3 = (t0 + 2360);
    xsi_vlogvar_assign_value(t3, t2, 0, 0, 8);

LAB27:    goto LAB2;

LAB7:    xsi_set_current_line(94, ng0);
    t9 = ((char*)((ng1)));
    t10 = (t0 + 2360);
    xsi_vlogvar_assign_value(t10, t9, 0, 0, 8);
    goto LAB27;

LAB9:    xsi_set_current_line(95, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB28;

LAB29:    if (*((unsigned int *)t3) != 0)
        goto LAB30;

LAB31:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB32;

LAB33:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB34;

LAB35:    if (*((unsigned int *)t7) > 0)
        goto LAB36;

LAB37:    if (*((unsigned int *)t12) > 0)
        goto LAB38;

LAB39:    memcpy(t11, t10, 8);

LAB40:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB11:    xsi_set_current_line(96, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB41;

LAB42:    if (*((unsigned int *)t3) != 0)
        goto LAB43;

LAB44:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB45;

LAB46:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB47;

LAB48:    if (*((unsigned int *)t7) > 0)
        goto LAB49;

LAB50:    if (*((unsigned int *)t12) > 0)
        goto LAB51;

LAB52:    memcpy(t11, t10, 8);

LAB53:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB13:    xsi_set_current_line(97, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB54;

LAB55:    if (*((unsigned int *)t3) != 0)
        goto LAB56;

LAB57:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB58;

LAB59:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB60;

LAB61:    if (*((unsigned int *)t7) > 0)
        goto LAB62;

LAB63:    if (*((unsigned int *)t12) > 0)
        goto LAB64;

LAB65:    memcpy(t11, t10, 8);

LAB66:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB15:    xsi_set_current_line(98, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB67;

LAB68:    if (*((unsigned int *)t3) != 0)
        goto LAB69;

LAB70:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB71;

LAB72:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB73;

LAB74:    if (*((unsigned int *)t7) > 0)
        goto LAB75;

LAB76:    if (*((unsigned int *)t12) > 0)
        goto LAB77;

LAB78:    memcpy(t11, t10, 8);

LAB79:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB17:    xsi_set_current_line(99, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB80;

LAB81:    if (*((unsigned int *)t3) != 0)
        goto LAB82;

LAB83:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB84;

LAB85:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB86;

LAB87:    if (*((unsigned int *)t7) > 0)
        goto LAB88;

LAB89:    if (*((unsigned int *)t12) > 0)
        goto LAB90;

LAB91:    memcpy(t11, t10, 8);

LAB92:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB19:    xsi_set_current_line(100, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB93;

LAB94:    if (*((unsigned int *)t3) != 0)
        goto LAB95;

LAB96:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB97;

LAB98:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB99;

LAB100:    if (*((unsigned int *)t7) > 0)
        goto LAB101;

LAB102:    if (*((unsigned int *)t12) > 0)
        goto LAB103;

LAB104:    memcpy(t11, t10, 8);

LAB105:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB21:    xsi_set_current_line(101, ng0);
    t3 = (t0 + 1640U);
    t4 = *((char **)t3);
    memset(t12, 0, 8);
    t3 = (t4 + 4);
    t13 = *((unsigned int *)t3);
    t14 = (~(t13));
    t15 = *((unsigned int *)t4);
    t16 = (t15 & t14);
    t17 = (t16 & 1U);
    if (t17 != 0)
        goto LAB106;

LAB107:    if (*((unsigned int *)t3) != 0)
        goto LAB108;

LAB109:    t7 = (t12 + 4);
    t18 = *((unsigned int *)t12);
    t19 = *((unsigned int *)t7);
    t20 = (t18 || t19);
    if (t20 > 0)
        goto LAB110;

LAB111:    t21 = *((unsigned int *)t12);
    t22 = (~(t21));
    t23 = *((unsigned int *)t7);
    t24 = (t22 || t23);
    if (t24 > 0)
        goto LAB112;

LAB113:    if (*((unsigned int *)t7) > 0)
        goto LAB114;

LAB115:    if (*((unsigned int *)t12) > 0)
        goto LAB116;

LAB117:    memcpy(t11, t10, 8);

LAB118:    t25 = (t0 + 2360);
    xsi_vlogvar_assign_value(t25, t11, 0, 0, 8);
    goto LAB27;

LAB23:    xsi_set_current_line(102, ng0);
    t3 = ((char*)((ng23)));
    t4 = (t0 + 2360);
    xsi_vlogvar_assign_value(t4, t3, 0, 0, 8);
    goto LAB27;

LAB28:    *((unsigned int *)t12) = 1;
    goto LAB31;

LAB30:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB31;

LAB32:    t9 = ((char*)((ng6)));
    goto LAB33;

LAB34:    t10 = ((char*)((ng4)));
    goto LAB35;

LAB36:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB40;

LAB38:    memcpy(t11, t9, 8);
    goto LAB40;

LAB41:    *((unsigned int *)t12) = 1;
    goto LAB44;

LAB43:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB44;

LAB45:    t9 = ((char*)((ng8)));
    goto LAB46;

LAB47:    t10 = ((char*)((ng9)));
    goto LAB48;

LAB49:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB53;

LAB51:    memcpy(t11, t9, 8);
    goto LAB53;

LAB54:    *((unsigned int *)t12) = 1;
    goto LAB57;

LAB56:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB57;

LAB58:    t9 = ((char*)((ng10)));
    goto LAB59;

LAB60:    t10 = ((char*)((ng11)));
    goto LAB61;

LAB62:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB66;

LAB64:    memcpy(t11, t9, 8);
    goto LAB66;

LAB67:    *((unsigned int *)t12) = 1;
    goto LAB70;

LAB69:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB70;

LAB71:    t9 = ((char*)((ng13)));
    goto LAB72;

LAB73:    t10 = ((char*)((ng14)));
    goto LAB74;

LAB75:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB79;

LAB77:    memcpy(t11, t9, 8);
    goto LAB79;

LAB80:    *((unsigned int *)t12) = 1;
    goto LAB83;

LAB82:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB83;

LAB84:    t9 = ((char*)((ng16)));
    goto LAB85;

LAB86:    t10 = ((char*)((ng17)));
    goto LAB87;

LAB88:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB92;

LAB90:    memcpy(t11, t9, 8);
    goto LAB92;

LAB93:    *((unsigned int *)t12) = 1;
    goto LAB96;

LAB95:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB96;

LAB97:    t9 = ((char*)((ng19)));
    goto LAB98;

LAB99:    t10 = ((char*)((ng20)));
    goto LAB100;

LAB101:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB105;

LAB103:    memcpy(t11, t9, 8);
    goto LAB105;

LAB106:    *((unsigned int *)t12) = 1;
    goto LAB109;

LAB108:    t5 = (t12 + 4);
    *((unsigned int *)t12) = 1;
    *((unsigned int *)t5) = 1;
    goto LAB109;

LAB110:    t9 = ((char*)((ng21)));
    goto LAB111;

LAB112:    t10 = ((char*)((ng22)));
    goto LAB113;

LAB114:    xsi_vlog_unsigned_bit_combine(t11, 8, t9, 8, t10, 8);
    goto LAB118;

LAB116:    memcpy(t11, t9, 8);
    goto LAB118;

}


extern void work_m_04814314487445502379_0212582729_init()
{
	static char *pe[] = {(void *)Always_37_0,(void *)Always_65_1,(void *)Always_92_2};
	xsi_register_didat("work_m_04814314487445502379_0212582729", "isim/tb_SANGDAN_TP_8bit_2Speed_isim_beh.exe.sim/work/m_04814314487445502379_0212582729.didat");
	xsi_register_executes(pe);
}
